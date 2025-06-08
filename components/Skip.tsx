import { SkipProps } from "./tools/SkipProps";

export default function Skip(props: SkipProps) {
  return (
    <div>
      <h2>{props.id}</h2>
      <p>{props.hire_period_days}</p>
      <p>Price: £{props.price_before_vat}</p>
      <p>Location: {props.postcode}</p>
    </div>
  );
}
