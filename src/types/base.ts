
export interface BaseResponse {
  status?: number;
  code?: string;
  status_verbose?: string;
}

export type Country = 'pl' | 'world';