import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Page() {

    if(!cookies().has("admin")) {
        redirect("/");
    }

    return (
        <div>You made it!</div>
    );
}
