import React from 'react';
import styles from './ImageText.module.css';

export default function ImageText({image, title, text}) {
  return (
    <div className="grid">
      <div className="col-4 col-middle">
        <div className={styles.imageSize}>
          <img src={image}></img>
        </div>
      </div>
      <div className="col col-middle">
          <p><b>{title}</b></p>
          <p>
            {text}
          </p>
      </div>
    </div>
  );
}