import fnv from "fnv-plus";

export function fnv1a64(data: string) {
  
  // @ts-ignore
  const hashHex = fnv.fast1a64(data) as string
  return [
    parseInt(hashHex.substr(14, 2), 16),
    parseInt(hashHex.substr(12, 2), 16),
    parseInt(hashHex.substr(10, 2), 16),
    parseInt(hashHex.substr(8, 2), 16),
    parseInt(hashHex.substr(6, 2), 16),
    parseInt(hashHex.substr(4, 2), 16),
    parseInt(hashHex.substr(2, 2), 16),
    parseInt(hashHex.substr(0, 2), 16)
  ]
}
