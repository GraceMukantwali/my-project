import { useParams } from "react-router-dom";

export default function EditBook() {
  const { id } = useParams();
  return <h2>Edit Book Page - ID: {id}</h2>;
}
