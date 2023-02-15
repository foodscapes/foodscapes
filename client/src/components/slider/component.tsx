import * as React from 'react';

import cn from 'lib/classnames';

import * as SliderPrimitive from '@radix-ui/react-slider';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, defaultValue, onValueChange, ...props }, ref) => {
  const [value, setValue] = React.useState(defaultValue);
  const { format } = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn({
        'relative flex w-full touch-none select-none items-center': true,
        [className]: !!className,
      })}
      onValueChange={(v) => {
        setValue(v);
        if (onValueChange) onValueChange(v);
      }}
      defaultValue={defaultValue}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-0.5 w-full grow overflow-hidden rounded-full bg-white/20">
        <SliderPrimitive.Range className="absolute h-full bg-white/80" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb asChild>
        <span className="relative block h-2 w-2 rounded-full bg-white transition-colors focus:outline-none focus:ring-1 focus:ring-gray-400 disabled:pointer-events-none disabled:opacity-50">
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 text-xxs text-white">
            {format(value[0])}
          </span>
        </span>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;
