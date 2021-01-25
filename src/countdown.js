module.exports = tick => {
  let counter = 10;
  const timer = setInterval(() => {
    tick(counter--);
    if (!counter) {
      clearInterval(timer);
    }
  }, 1000);
};
