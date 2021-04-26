/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { DateString } from '@_types/Time'
import { DataCounts } from './DataCounts'
import { DiscoveryNode } from './DiscoveryNode'
import { JobForecastStatistics } from './JobForecastStatistics'
import { JobState } from './JobState'
import { ModelSizeStats } from './ModelSizeStats'
import { TimingStats } from './TimingStats'

export class JobStats {
  assignment_explanation?: string
  data_counts: DataCounts
  forecasts_stats: JobForecastStatistics
  job_id: string
  model_size_stats: ModelSizeStats
  node?: DiscoveryNode
  open_time?: DateString
  state: JobState
  timing_stats: TimingStats
  deleting?: boolean
}