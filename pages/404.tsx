import { useRouter } from 'next/router'
const router = useRouter();
function 404Page() {
     return("<html><body><title> 404 Not Found </title><h1> 404. Not found maybe search the Next js docs!</h1></body></html>");
}
export default 404Page;
