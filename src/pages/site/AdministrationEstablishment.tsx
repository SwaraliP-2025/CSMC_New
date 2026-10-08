import { Navigate, useParams } from "react-router-dom";
import { administrationEstablishmentCategory } from "@/data/administrationEstablishmentDocuments";

/** Older address. These records are shown on the General Administration & Records department page. */
export default function AdministrationEstablishment() {
  const { categoryId } = useParams();
  const category = administrationEstablishmentCategory(categoryId);
  const target = category
    ? `/departments/general-administration#${category.id}`
    : "/departments/general-administration";
  return <Navigate to={target} replace />;
}
