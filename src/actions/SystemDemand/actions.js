import { LOAD_SD_LIST_REQUEST, LOAD_SD_LIST_SUCCESS, LOAD_SD_LIST_FAILURE,
	LOAD_SD_REQUEST, LOAD_SD_SUCCESS, LOAD_SD_FAILURE
} from '../../redux/modules/constants';

// ============================================================
// =============== GET SYSTEM DEMAND LIST ACTION ==============
// ============================================================

export function fetchSDList() {
  return {
    types: [LOAD_SD_LIST_REQUEST, LOAD_SD_LIST_SUCCESS, LOAD_SD_LIST_FAILURE],
    promise: (client) => client.get('api/turksystem/sysdemand/')
  };
}

// =============================================================
// ============== GET SINGLE SYSTEM DEMAND ACTION ==============
// =============================================================

export function fetchSignleSD(slug) {
  return {
    types: [LOAD_SINGLE_SD_REQUEST, LOAD_SINGLE_SD_SUCCESS, LOAD_SINGLE_SD_FAILURE],
    promise: (client) => client.get(`api/turksystem/sysdemand/${slug}`)
  };
}