import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "public/content/uncensored");
  const files = fs.readdirSync(dir);

  const images = files.filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/i));
  const videos = files.filter((file) => file.match(/\.(mp4|webm)$/i));

  return {
    props: {
      images,
      videos,
    },
  };
}

export default function Home({ images, videos }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Galería Ibiza Girl</h1>

      <h2>📸 Imágenes</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={`/content/uncensored/${img}`}
            alt={`Imagen ${idx + 1}`}
            style={{ width: "100%", borderRadius: "12px" }}
          />
        ))}
      </div>

      <h2>🎥 Vídeos</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {videos.map((vid, idx) => (
          <video
            key={idx}
            src={`/content/uncensored/${vid}`}
            controls
            style={{ width: "100%", borderRadius: "12px" }}
          />
        ))}
      </div>
    </div>
  );
}

