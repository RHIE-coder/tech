let matic_lodis_transactions = {
  ldTxType: `${"order"} / ${"tokenSwap"}, ${"treasury"}, ${"sbt"}`,

  //order
  order: {
    shipperAddress: "",
    carrierAddress: "",
    executorAddress: "",
    executor: "",
    orderCA: "0x2b638ec2740d869c3e3e1e82e18c5d54d6b50153", // 실행된 Lodis Order 컨트랙트 address
    orderNumber: "D03", // Backend에서 관리하는 주문번호
    orderAction: `
      ${"lock"}:${{
        lockDeliveryCost: "Shipper가 Escrow에 Lock한 FxDKA수량", //FxDKA Amount
      }}
      ${"confirm"}:${{
        confirmTimestamp: "(주문 만료 시간):string",
      }}
      ${"releaseByAdmin"}:${{
        treasuryCA: "treasury 컨트렉트 address",
        treasuryAmount: "운송확정 시 treasury에 보관된 FxDKA 수량", //FxDKA Amount
        deliveryCostToCarrier:
          "운송확정(+지급보류) 시 Carrir에게 전달되는 FxDKA 수량", //FxDKA Amount
      }}
      ${"releaseOfDeliveryFailByAdmin"}:${{
        deliveryCostToShipper: "운송실패 시 Shipper에게 되돌아가는 FxDKA 수량", //FxDKA Amount
      }}
      ${"releaseOfCancelByShipper"}:${{
        deliveryCostToShipper:
          "주문취소(by shipper) 시 Shipper에게 되돌아가는 FxDKA 수량", //FxDKA Amount
        deliveryCostToCarrir:
          "주문취소(by carrier) 시 Carrier에게 되돌아가는 FxDKA 수량", //FxDKA Amount
      }}
      ${"releaseOfCancelByCarrier"}:${{
        deliveryCostToShipper:
          "주문취소(by carrier) 시 Shipper에게 되돌아가는 FxDKA 수량", //FxDKA Amount
      }}
      ${"releaseOfPickupDelayByShipper"}:${{
        deliveryCostToShipper:
          "픽업지연(by shipper) 시 Shipper에게 되돌아가는 FxDKA 수량",
      }}
      ${"SBT"}:${{
        "shipperSBT / carrierSBT": {
          achievement: "", // SBT 발행 조건
          to: "", // SBT를 획득한 유저의 address
          tokenId: "", // 발행된 tokenId
          uri: "", // 발행된 uri
        },
      }}`,
    actionDetail: `
      '0' : ORDER_REGISTERED,  //shipper의 주문 등록 완료
      '1' : FINALIZED_CARRIER,  //캐리어와 shipper 매칭 완료
      '2' : CARRIER_PICKUP,   //캐리어 픽업
      '3' : DELIVERY_COMPLETE, //배송완료
      '4' : CARRIER_PICKUP_DELAY, // 캐리어 픽업 딜레이
      '5' : DELIVERY_EXPIRED,  //배송 실패 (배송 딜레이)
      '6' : DELIVERY_CANCEL  //배송 취소
      '7' : DELIVERY_CANCEL_SHIPPER, // Shipper 배송 취소
      '8' : DELIVERY_CANCEL_CARRIER // Carrier 배송 취소
    `,
    isForward: `${true}:대납 / ${false}:유저직접서명`,
  },

  // orderFail

  //tokwnswap

  //treasury

  // sbt
};
