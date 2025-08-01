import { TFunction } from "i18next"

export const getCanceledOrderStatus = (
  t: TFunction<"translation">,
  status: string
): { label: string; color: "red" | "green" } | null => {
  if (status === "canceled") {
    return { label: t("orders.status.canceled"), color: "red" }
  }
  if (status === "completed") {
    return { label: t("orders.status.completed"), color: "green" }
  }

  return null
}

export const getOrderStatus = (
  t: TFunction<"translation">,
  status: string
): { label: string; color: "red" | "orange" | "green" } => {
  const [label = "-", color = "orange"] = {
    canceled: [t("orders.status.canceled"), "red"],
    pending: [t("orders.status.pending"), "orange"],
    completed: [t("orders.status.completed"), "green"],
  }[status] as [string, "red" | "orange" | "green"]

  return { label, color }
}

export const getOrderPaymentStatus = (
  t: TFunction<"translation">,
  status: string
) => {
  const [label, color] = {
    pending: [t("orders.status.pending"), "red"],
    authorized: [t("orders.payment.status.authorized"), "orange"],
    partially_authorized: [
      t("orders.payment.status.partiallyAuthorized"),
      "red",
    ],
    awaiting: [t("orders.payment.status.awaiting"), "orange"],
    captured: ["Payment Captured", "green"],
    refunded: [t("orders.payment.status.refunded"), "green"],
    partially_refunded: [
      t("orders.payment.status.partiallyRefunded"),
      "orange",
    ],
    partially_captured: [
      t("orders.payment.status.partiallyCaptured"),
      "orange",
    ],
    canceled: [t("orders.payment.status.canceled"), "red"],
    requires_action: [t("orders.payment.status.requiresAction"), "orange"],
  }[status] as [string, "red" | "orange" | "green"]

  return { label, color }
}

export const getOrderFulfillmentStatus = (
  t: TFunction<"translation">,
  status: string
) => {
  const [label, color] = {
    not_fulfilled: [t("orders.fulfillment.status.notFulfilled"), "red"],
    partially_fulfilled: [
      t("orders.fulfillment.status.partiallyFulfilled"),
      "orange",
    ],
    fulfilled: [t("orders.fulfillment.status.fulfilled"), "green"],
    partially_shipped: [
      t("orders.fulfillment.status.partiallyShipped"),
      "orange",
    ],
    shipped: [t("orders.fulfillment.status.shipped"), "green"],
    delivered: [t("orders.fulfillment.status.delivered"), "green"],
    partially_delivered: [
      t("orders.fulfillment.status.partiallyDelivered"),
      "orange",
    ],
    partially_returned: [
      t("orders.fulfillment.status.partiallyReturned"),
      "orange",
    ],
    returned: [t("orders.fulfillment.status.returned"), "green"],
    canceled: [t("orders.fulfillment.status.canceled"), "red"],
    requires_action: [t("orders.fulfillment.status.requiresAction"), "orange"],
  }[status] as [string, "red" | "orange" | "green"]

  return { label, color }
}
