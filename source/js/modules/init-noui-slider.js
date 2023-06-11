import noUiSlider from 'nouislider';

const initNoUiSlider = () => {
  const sliders = document.querySelectorAll('[data-range-slider]');

  if (!sliders.length) return;

  sliders.forEach((rangeSlider) => {
    const name = rangeSlider.dataset.rangeSlider;
    const valueField = rangeSlider.querySelector('[data-range-slider-value]');
    const valueFieldSuffix = valueField.dataset.suffix;
    const valueFieldValue = valueField.querySelector('span');

    const slider = rangeSlider.querySelector('[data-range-slider-control]');
    const inputStart = rangeSlider.querySelector('#start' + name);

    const min = Number(rangeSlider.dataset.rangeSliderMin);
    const max = Number(rangeSlider.dataset.rangeSliderMax);
    const start = Number(inputStart.value);

    noUiSlider.create(slider, {
      cssPrefix: 'range-slider__',
      step: 1,
      start: [start],
      range: {
        min,
        max,
      },
      format: {
        to: function (value) {
          return Math.trunc(Number(value));
        },
        from: function (value) {
          return Math.trunc(Number(value));
        }
      }
    });

    slider.noUiSlider.on('update', function (values, handle) {
      inputStart.value = values;
      valueFieldValue.innerHTML = values + valueFieldSuffix;
    });
  })
};

export {initNoUiSlider};
