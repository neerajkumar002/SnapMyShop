import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
const Breadcrumbs = () => {
  const breadcrumbs = useReactRouterBreadcrumbs();

  return (
    <div className=" lg:px-13 py-5">
      {breadcrumbs.map(({ breadcrumb, key }, index) => (
        <span key={key} className="lg:text-xl text-gray-500">
          {breadcrumb}
          {index < breadcrumbs.length - 1 && <span className="ml-2 mr-2">/</span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
