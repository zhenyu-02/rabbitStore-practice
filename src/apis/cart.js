import request from  "@/utils/http";

export function insertCartAPI({skuId, count}) {
  return request({
    url:'/member/cart',
    method:'POST',
    data:{
      skuId,
      count
    }
  })
}

export function findNewCartList() {
  return request({
    url:'/member/cart',
  })
}

export function delCartAPI(ids) {
  return request({
    url:'/member/cart',
    method:'DELETE',
    data:{
      ids
    }
  })
}