export const getTabelData = async () => {
  const options = {
    method: "GET",
    headers: { Authorization: "Basic YWRtaW46OGtRM1VuVlVtU2dUWTBSWQ==" },
  };

  var data = [];

  await fetch("https://demo.4pointx.com/_notebooks/notebooks/_all", options)
    .then((response) => response.json())
    .then((response) => {
      data = response;
    })
    .catch((err) => console.error(err));

  return Array.isArray(data) ? data : [data];
};
