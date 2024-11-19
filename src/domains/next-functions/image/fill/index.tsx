import Image from 'next/image';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import styles from './index.module.css';

/**
 * @description fill 속성을 사용하려면 이미지 sizes 속성을 반드시 지정해야 합니다.
 * @description fill 속성을 사용하게 되면 image position 속성이 absolute로 변경되어 부모 position 속성이 relative여야 한다.
 * @author Charles
 * @export
 * @return {*}
 */
export default function FillMain() {
  return (
    <main>
      <div className={styles.grid}>
        <div>
          <Image src={image1} fill alt="" />
        </div>
        <div>
          <Image
            src={image2}
            fill
            alt=""
            sizes="
            (max-width: 749px) 100vw,
            (min-width: 750px) 50vw
          "
          />
        </div>
      </div>
    </main>
  );
}
