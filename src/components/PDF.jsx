export default function PDF({ file, height, width }) {
  return <iframe src={file} height={height} width={width} />;
}
