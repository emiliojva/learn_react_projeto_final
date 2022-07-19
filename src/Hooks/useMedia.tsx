import React from "react";

const useMedia = (media: string) => {
  const [match, setMatch] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    console.log("montei useMedia");

    const fn_media_query = () => {
      /**
       * Retorna true/false se max-width da tela estiver dando match com a query passada.
       */
      const { matches } = window.matchMedia(media);
      setMatch(matches);

      console.log(`Mobile mode: ${matches}`);
    };

    /**
     * Inclui evento de monitoramento de alteração no tamanho da tela(window)
     */
    window.addEventListener("resize", fn_media_query);

    /**
     * Fix bug caso o usuário já esteja no tamanho mobile.
     */
    fn_media_query();
    /**
     * Usamos o desmontar pois toda vez que setMatch alterar o valor, causará efeito de re-render.
     * E NÃO queremos ter um pilha de evento resize com MESMA função fn_media_query repetindo.
     * Removemos o listerner toda vez que o hook desmonta.
     */
    return () => {
      console.log("desmontei useMedia");
      window.removeEventListener("resize", fn_media_query);
    };
  }, [media]);

  return match;
};

export default useMedia;
