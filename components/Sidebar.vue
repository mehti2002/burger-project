<template>
  <section class="sidebar-section">
    <div class="sidebar-section__head">
      <img
        class="sidebar-section__head-img"
        src="/images/sidebar/avocado-svgrepo-com.png"
      />
      <span class="sidebar-section__head-text">avoburger</span>
    </div>

    <div class="sidebar-section__content">
      <div class="sidebar-section__list">
        <div
          v-for="(item, index) in sidebarItems"
          :key="index"
          class="sidebar-section__item"
          :class="{ 'sidebar-section__item-active': index === 2 }"
        >
          <img
            :src="item.icon"
            :alt="item.title"
            class="sidebar-section__item-icon"
          />
          <span class="sidebar-section__item-name">{{ item.title }}</span>
          <span class="sidebar-section__item-orders" v-if="index === 1" >12</span>
        </div>
      </div>
    </div>

    <div class="sidebar-section__bottom">
      <div class="sidebar-section__send">
        <span class="sidebar-section__send-text">Done for the day?</span>
        <div class="sidebar-section__send-btn">
          <span class="sidebar-section__send-btn-text">Send daily report</span>
          <img
            class="sidebar-section__send-btn-icon"
            src="/icons/sendicon.svg"
          />
        </div>
      </div>
      <div class="sidebar-section__profile">
        <img
          class="sidebar-section__profile-img"
          src="/images/sidebar/profile.png"
        />
        <span class="sidebar-section__profile-name"> mahdi mohammdi </span>
        <img class="sidebar-section__profile-svg" src="/icons/profile.svg" />
      </div>
    </div>
  </section>
</template>

<script setup>
const sidebarItems = [
  { title: "Dashboard", icon: "/icons/sidebaricon1.svg" },
  { title: "Orders", icon: "/icons/sidebaricon2.svg" },
  { title: "Products", icon: "/icons/sidebaricon3.svg" },
  { title: "Restaurants", icon: "/icons/sidebaricon4.svg" },
  { title: "Drivers", icon: "/icons/sidebaricon5.svg" },
];
</script>

<style lang="scss">
.sidebar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  justify-content: space-between;

  &__head {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 2rem;
    justify-content: center;
  }

  &__send-btn-icon {
    width: 20px;
  }

  &__content {
    width: 100%;
  }

  &__send-btn {
    background: linear-gradient(to right, #40e0d0, #84cc16);
    display: flex;
    flex-direction: row-reverse;
    padding: 0.5rem 1.5rem;
    gap: 10px;
    border-radius: 8px;
  }

  &__profile-name{
    font-size: 15px;
  }

  &__profile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.5rem;
    border-top: 1px solid #e5e7eb;
    margin-right: 0.3rem;
    margin-left: 0.3rem;
    margin-top: 0.5rem;
  }

  &__profile-img {
    width: 45px;
    height: 45px;
    border-radius: 99px;
  }

  &__profile-svg {
    width: 25px;
  }

  &__send {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  &__send-btn-text {
    font-size: 17px;
    color: rgb(255 255 255);
    font-weight: 500;
  }

  &__send-text {
    font-size: 15px;
    color: #808080;
  }

  &__head-text {
    font-weight: 600;
    font-size: 18px;
  }

  &__item-name {
    font-size: 16px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 1rem;
    cursor: pointer;
  }

  &__item :hover {
    background: #eeeeee;
  }

  &__bottom {
    position: fixed;
    bottom: 0;
  }

  &__item-orders{
    font-size: 13px;
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    font-weight: 600;
    text-align: center;
    background: linear-gradient(to right, #40e0d0, #84cc16);
  }

  &__head-img {
    width: 35px;
  }

  &__item-icon {
    width: 25px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__item-active {
    background: rgb(240 253 244);
    border-right: 5px solid rgb(34 197 94);
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>