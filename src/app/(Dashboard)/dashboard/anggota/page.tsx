import { Pegawai, columns } from "./column";
import { DataTableUser } from "@/components/DashboardComponent/DataTableUser";
import axios from "axios";

const getAnggota = async () : Promise<Pegawai[]> => {
  const { data : res } = await axios.get('https://64c0ffa6fa35860bae9fc1e3.mockapi.io/api/user')
  return res;
}


const Users = async() => {
  const data = await getAnggota();

  return (
    <section>
      <DataTableUser columns={columns} data={data} title="Anggota" />
    </section>
  );
};

export default Users;
