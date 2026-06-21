import { createContext, useContext, useState } from "react";

type VideoContextType = {
  videos: string[];
  addVideo: (uri: string) => void;
};

const VideoContext = createContext<VideoContextType>({
  videos: [],
  addVideo: () => {},
});

export function VideoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [videos, setVideos] = useState<string[]>([]);

  const addVideo = (uri: string) => {
    setVideos((prev) => [uri, ...prev]);
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo }}>
      {children}
    </VideoContext.Provider>
  );
}

export const useVideos = () => useContext(VideoContext);
