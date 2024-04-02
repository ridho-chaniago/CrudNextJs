import ContactTable from "@/components/contact-table";
import Search from "@/components/Search";
const Contact = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
      </div>
      <ContactTable></ContactTable>
    </div>
  );
};
export default Contact;
