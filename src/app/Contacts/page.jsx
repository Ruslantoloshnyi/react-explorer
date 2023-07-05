import TheContacts from "@/app/components/TheContacts/TheContacts";
import Contacts from "@/app/components/TheContacts/TheContacts";
import TheFooter from "@/app/components/TheFooter/TheFooter";
import TheHeader from "@/app/components/TheHeader/TheHeader";

function ContactsPage() {
  return (
    <>
      <div className="background">
        <TheHeader></TheHeader>
        <TheContacts></TheContacts>
      </div>
      <TheFooter></TheFooter>
    </>
  );
}

export default ContactsPage;
