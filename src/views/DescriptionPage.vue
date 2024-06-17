<template>
  <div :class="$style.wrapper">
    <div @click="handleBackClick" :class="$style.leftArrowIcon">
      <img src="/leftArrow.png" alt="leftArrowAIcon" />
    </div>
    <p :class="$style.errorMessage" v-show="isError">Cannot find selected country 😓</p>
    <p :class="$style.loadingMessage" v-show="!isError && isLoading">Loading...</p>

    <div :class="$style.infoWrapper" v-if="selectedCountry">
      <div :class="$style.leftPart">
        <img :src="selectedCountry.flags.svg" alt="countryFlag" />
      </div>

      <div :class="$style.rightPart">
        <p :class="$style.countryName">
          {{ selectedCountry.name.common }}
        </p>
        <p :class="$style.region">Region: {{ selectedCountry.region }}</p>
        <div :class="$style.languageList">
          Languages:
          <p :class="$style.language" v-for="key in selectedCountry.languages" :key="key">
            {{ key }}
          </p>
        </div>
        <p :class="$style.subregion">SubRegion: {{ selectedCountry.subregion }}</p>
        <p :class="$style.subregion">Area: {{ selectedCountry.area }}</p>
        <p :class="$style.subregion">Population: {{ selectedCountry.population }}</p>
        <p :class="$style.subregion">TimeZone: {{ selectedCountry.timezones }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import services from '@/services/index'
import { useRouter } from 'vue-router'

const props = defineProps(['countryName'])
const selectedCountry = ref(null)
const isLoading = ref(false)
const isError = ref(false)
const router = useRouter()

onMounted(() => {
  if (props.countryName) {
    const findCountry = async () => {
      isLoading.value = true
      try {
        const data = await services.findCountryByCapital(props.countryName)
        const result = await data.json()
        selectedCountry.value = result[0]
      } catch (error) {
        isError.value = true
      } finally {
        isLoading.value = false
      }
    }
    findCountry()
  }
})

const handleBackClick = () => {
  router.push('/')
}
</script>

<style module>
.wrapper {
  position: relative;
  z-index: 2;
  color: white;
  background-color: var(--color-2);
  width: 1200px;
  margin: 0 auto;
  transform: translateY(-60px);
  padding: 40px 30px;
  border-radius: 14px;
  border: 0.1px solid #5d5a5a3d;
  height: calc(100vh - 300px);
  overflow-x: hidden;
}

@media (max-width: 1280px) {
  .wrapper {
    width: 90%;
  }
}
.errorMessage,
.loadingMessage {
  font-size: 42px;
  color: white;
  text-align: center;
}

.infoWrapper {
  display: flex;
  gap: 18px;
  margin-top: 42px;
}

.leftPart {
  overflow: hidden;
  width: 600px;
  height: 400px;
  border-radius: 28px;
  border: 8px solid var(--color-1);
}

.leftPart > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.countryName {
  font-size: 42px;
}

.region {
  margin-top: 8px;
}

.language {
  background-color: var(--color-1);
  width: fit-content;
  padding: 4px;
  border-radius: 12px;
  margin-top: 8px;
}

.languageList {
  margin-top: 12px;
}

.subregion {
  margin-top: 12px;
}

.population {
  text-align: center;
}

.leftArrowIcon {
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: var(--color-1);
}

.leftArrowIcon > img {
  width: 40px;
  height: 40px;
}

@media (max-width: 1024px) {
  .infoWrapper {
    flex-direction: column;
  }

  .leftPart {
    width: 100%;
    height: 100%;
  }
}
</style>
