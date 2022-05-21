import RegistryService from "../../services/RegistryService";

export const fetchRegistry = (registryId) => (dispatch) => {
  RegistryService.fetchRegistry(registryId).then((response) => {
    dispatch({
      type: "FETCH_REGISTRY",
      registry: response.data.data,
    });
  });
};
