import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { routesData } from "../../assets/MockData/Data";
const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(Boolean);
  const pathData = useMemo(() => {
    return routesData.find((route) => route.path === `/${pathnames[0]}`);
  }, [pathname]);

  if (pathnames?.length === 0) {
    return <></>;
  }
  return (
    <div className="flex gap-2 items-center ">
      {<img src={pathData?.icon} alt={routesData?.[0]} className="h-5 w-5" />}

      {pathnames?.length == 1 && (
        <span className="capitalize text-sm cursor-pointer hover:underline ">
          {pathData?.name}
        </span>
      )}

      {pathnames?.map((item, index) => {
        const isLast = index === pathnames.length - 1;
        if (index == 0) return;
        return (
          <>
            <span
              key={index}
              className={`capitalize text-sm cursor-pointer hover:underline ${
                isLast ? "font-semibold" : "text-gray-500"
              }`}
            >
              {item}
            </span>
          </>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
