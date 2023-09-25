import { Form, useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    // *CARA 1
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>

    // * CARA 2
    // <Form method="PATCH">
    //   <Button type="primary">Make priority</Button>
    // </Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  console.log(params);
  return null;
}
