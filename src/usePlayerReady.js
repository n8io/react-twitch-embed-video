import { useCallback } from "react";

const Volume = {
  MUTED: 0,
  AUDIBLE: 1
};

const ensureAutoPlay = (player, isAutoPlay) => {
  // If the player should be paused on load then
  // then lets pause the player
  !isAutoPlay && player.pause();
};

const ensureVolume = (player, isMuted) => {
  // If the player was set to be muted on load
  // then lets make sure the volume is set to 0
  player.setVolume(isMuted ? Volume.MUTED : Volume.AUDIBLE);
};

const usePlayerReady = (EmbedApi, options) =>
  useCallback(() => {
    if (!EmbedApi) {
      // eslint-disable-next-line no-console
      console.warn("Player not provided");

      return;
    }

    const { getPlayer } = EmbedApi;
    const { autoplay: isAutoPlay, muted: isMuted, onReady } = options || {};
    const player = getPlayer();

    ensureVolume(player, isMuted);
    ensureAutoPlay(player, isAutoPlay);

    onReady && onReady(player);
  }, [EmbedApi, options]);

export { usePlayerReady };
