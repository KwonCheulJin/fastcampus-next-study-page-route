import Image, { ImageLoaderProps } from 'next/image';

export default function RemoteMain() {
  return (
    <main>
      <Image
        src="/img/image.jpg"
        width={500}
        height={750}
        quality={80}
        alt="dog"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAFElEQVR4nGNsaGhgwA2Y8MiNYGkA22EBlPG3fjQAAAAASUVORK5CYII="
      />
    </main>
  );
}

/**
 * @description image server가 존재할 경우에는 imageLoader를 사용해서 이미지를 처리한다.
 * @author Charles
 * @param {ImageLoaderProps} params
 * @return {*}
 */
function imageLoader(params: ImageLoaderProps) {
  const { src, width, quality } = params;
  return `/img${src}?w=${width}&q=${quality}`;
}
