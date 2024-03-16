import { useQuery } from "react-query";
import { api } from "../_config/api";
import { LevelsApi } from "../_api/enum";
import { AxiosResponse } from "axios";
import { LevelItemType } from "../_types";

export const UseLevelsData = () => useQuery<AxiosResponse<{ data: Array<LevelItemType> }>>({
    queryKey: 'getLevels',
    queryFn: () => api.get(LevelsApi.LIST)
})