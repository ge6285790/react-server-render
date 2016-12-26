// for use on server to guarantee data was fetched before rendering pages for user
export default function fetchComponentData(dispatch, getComponent, params) {
  let needsApi = [];
  if (undefined !== getComponent && undefined !== getComponent.needsApi) {
    needsApi = getComponent.needsApi.map((data, key) => data);
  }
  const promises = needsApi.map(need => dispatch(need(params)));
  return Promise.all(promises);
}

// for client side use, let each component trigger it's fetching data logics
// might as well to add in dupe check to avoid fetching when data is already there
export function fetchNeeds(needsApi, props) {
  const { params, dispatch } = props;
  needsApi.map(need => dispatch(need(params)));
}
