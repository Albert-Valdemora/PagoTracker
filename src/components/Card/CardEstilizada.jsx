import { Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";


export const CardEstilizada = ({ info }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);

  if (!isLoading) {
    return (
      <>
        {info.map((item, i) => (
          <div key={i} className="card__container h-32">
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300" />
              </Skeleton>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {info.map((item, i) => (
        <div key={i} className="card__container">
          <h3>{item[0]}</h3>

          <h2>{item[1]}</h2>

          <div className="card__subInfo">
            <p>Incremento Total</p>
            <p>{item[2]} ⬆️</p>
          </div>
        </div>
      ))}
    </>
  );
};
