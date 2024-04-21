

const loaded_time = Date.now()
let last_eval_time = 0

export async function client_events() {
  const params = new URLSearchParams()
  params.append("loaded_time", loaded_time.valueOf())
  params.append("last_eval_time", last_eval_time.valueOf())
  return api("GET", `/api/events?${params.toString()}`)
}

export async function eval_logs() {
  const logs = await api("GET", `/api/logs`)
  last_eval_time = Date.now()
  return logs
}

export async function eval_log(file) {
  // the file may have the full uri, strip it down to just the log file
  const url = new URL(file)
  file = url.pathname.split("/").pop()

  // get the file
  return api("GET", `/api/logs/${file}`)
}

export async function api(method, path, body) {
  // build headers
  const headers = {
    Accept: "application/json",
    Pragma: "no-cache",
    Expires: "0",
    ['Cache-Control']: 'no-cache',
  }
  if (body) {
    headers["Content-Type"] = "application/json";
  }

  // make request
  const response = await fetch(`${path}`, { method, headers, body });
  if (response.ok) {
    return response.json()
  } else if (response.status !== 200) {
    const message = await response.text() || response.statusText;
    const error = new Error(`Error: ${response.status}: ${message})`)
    throw error;
  } else {
    throw new Error(`${response.status} - ${response.statusText} `);
  }

}
