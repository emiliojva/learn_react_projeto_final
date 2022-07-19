import React, { PropsWithChildren } from "react";
import { PhotoModel } from "../../Model/PhotoModel";
import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, children }: IFeedPhotosItemProps) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} title={photo.title} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;

export interface IFeedPhotosItemProps extends PropsWithChildren {
  photo: PhotoModel;
}
