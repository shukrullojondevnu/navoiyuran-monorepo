import * as React from "react";

const Hero = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return (
    <div>
      <div className="container flex">
        <div className="flex-1">asdf</div>
        <div className="flex-1">img</div>
      </div>
    </div>
  );
});

export { Hero };
