'use client';
import Image from 'next/image';

export default function Photos() {
  return (
    <section className="block">
      <div className="photos-grid photos-grid-two">
        <figure style={{ margin: 0 }}>
          <div className="photo">
            <Image
              src="/images/photos/hero.jpg"
              alt="Terezie Alder v p\u0159\u00EDrod\u011B"
              width={700}
              height={525}
            />
          </div>
        </figure>
        <figure style={{ margin: 0 }}>
          <div className="photo">
            <Image
              src="/images/photos/photo-cat.jpg"
              alt="Terezie Alder s ko\u010Dkou"
              width={700}
              height={525}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
