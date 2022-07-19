import React from "react";
import { PHOTOS_GET } from "../../ApiService";
import { PhotoModel } from "../../Model/PhotoModel";
import { useFetch } from "../../useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import FeedPhotosItem from "./FeedPhotosItem";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = () => {
  const { data, error, loading, request } = useFetch<PhotoModel[]>();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request<PhotoModel[]>(url, options); // funcao assincrona que aceita tipagem generica para a propriedade 'json'. Nesse caso, generalizando todo json como Array de Photos
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  /**
   * Tratamentos de retorno do Component
   */

  /* Se houver erro aciono Helper Error */
  if (error) return <Error error={error} />;

  /* Se estiver carregando ... PHOTO_GET */
  if (loading) return <Loading />;

  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo: PhotoModel) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
      //
    );
  else return null;
};

export default FeedPhotos;
