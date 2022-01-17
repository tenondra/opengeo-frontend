import { CSSProperties, useRef, useState } from 'react';
import { LatLngTuple } from 'leaflet';
import { Flex } from '@chakra-ui/react';
import { Loading, sleep } from '../Utils/Utils';

/*
 * Displays a streetview frame
 * */
export default function StreetView({
  startingLocation,
  onLoad,
  style,
}: {
  startingLocation: LatLngTuple;
  onLoad?: () => void;
  style?: CSSProperties;
}) {
  const iframeRef = useRef({} as HTMLIFrameElement);
  const [streetviewLoading, setStreetviewLoading] = useState(true);

  /*
   * Callback to apply custom css overlay to the streetview iframe
   * */
  async function onIframeLoad() {
    const iframeCss = document.createElement('style');
    iframeCss.textContent = `#consent-bump, .scene-footer, .app-viewcard-strip, #titlecard,
    #image-header, #widget-watermark {display: none !important;}`;
    if (!iframeRef.current?.contentDocument) {
      return;
    }
    iframeRef.current!.contentDocument!.head.appendChild(iframeCss);
    const observer = new MutationObserver(mutations =>
      mutations.forEach(m =>
        m.addedNodes.forEach(n => {
          if (n.nodeName === 'CANVAS') {
            n.addEventListener('onload', e => console.log(e));
            console.log('LOADED');
            setStreetviewLoading(false);
            // observer.disconnect();
          }
        })
      )
    );
    while (!iframeRef.current.contentDocument?.querySelector('#content-container')) {
      await sleep(1);
    }
    observer.observe(iframeRef.current!.contentDocument!.querySelector('#content-container')!, {
      subtree: true,
      childList: true,
    });
    const canvas = iframeRef.current!.contentDocument!.getElementsByClassName('widget-scene-canvas');
    console.log(canvas.length);
  }

  return (
    <Flex p={0} m={0}>
      {streetviewLoading && (
        <Flex
          justify={'center'}
          align={'center'}
          position="absolute"
          zIndex={5}
          w={'100%'}
          h={'100%'}
          style={{ ...style }}
        >
          <Loading message="StreetView is loading" />
        </Flex>
      )}
      <iframe
        style={{ position: 'absolute', zIndex: 4, ...style }}
        ref={iframeRef}
        width="100%"
        height="100%"
        onLoad={async function () {
          await onIframeLoad();
          if (onLoad) {
            await onLoad();
          }
        }}
        title="streetView"
        src={`/maps?q=&layer=c&cbll=${startingLocation[0]},${startingLocation[1]}&cbp=0,0,0,0,0`}
        id="streetview"
        sandbox="allow-scripts allow-pointer-lock allow-same-origin"
      />
    </Flex>
  );
}
