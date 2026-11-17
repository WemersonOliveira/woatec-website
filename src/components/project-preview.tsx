import Image from "next/image";

/** Receive only approved project screenshots; empty frames are explicit placeholders. */
export function ProjectPreview({
  desktop,
  mobile,
  alt = "Captura de projeto autorizado",
}: {
  desktop?: string;
  mobile?: string;
  alt?: string;
}) {
  return (
    <div className="device-composition">
      <div className="desktop-frame">
        <div className="browser-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span />
        </div>
        <div className="desktop-screen">
          {desktop ? (
            <Image
              src={desktop}
              alt={alt}
              fill
              sizes="(max-width: 800px) 70vw, 35vw"
            />
          ) : (
            <div className="screen-skeleton" aria-hidden="true">
              <span className="skeleton-nav" />
              <div className="skeleton-copy">
                <i />
                <i />
                <i />
              </div>
              <div className="skeleton-art" />
              <div className="skeleton-tiles">
                <i />
                <i />
                <i />
              </div>
            </div>
          )}
        </div>
        <div className="desktop-base" aria-hidden="true" />
      </div>
      <div className="phone-frame">
        <span className="phone-speaker" aria-hidden="true" />
        <div className="phone-screen">
          {mobile ? (
            <Image
              src={mobile}
              alt={`${alt} — versão mobile`}
              fill
              sizes="120px"
            />
          ) : (
            <div className="phone-skeleton" aria-hidden="true">
              <i />
              <span />
              <i />
              <i />
              <i />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
