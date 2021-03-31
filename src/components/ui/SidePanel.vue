<template>
    <aside class="bg-blue text-white flex flex-col justify-between" style="height: 100%">
      <div class="">
          <div class="mb-6 text-center flex flex-col items-center justify-center">
              <i class="ri-git-repository-private-line mr-2 text-h3 ri-fw"></i>
              <span class="text-medium font-bold">VOTE APP</span>
          </div>
          <div class=" mt-2 ml-5">
              <router-link to="/dashboard" class="flex items-center text-medium text-body-2 ">
                  <i class="ri-dashboard-fill mr-2 ri-fw"></i>
                  Analytics
              </router-link>
          </div>
          <div class=" mt-8 ml-5">
              <router-link to="/voting-group" class="flex items-center text-medium text-body-2 ">
                  <i class="ri-group-2-line mr-2 ri-fw"></i>
                  Voter Group/Member
              </router-link>
          </div>
          <div class=" mt-8 ml-5">
              <router-link to="/setup" class="flex items-center text-medium text-body-2 ">
                  <i class="ri-windy-line mr-2 ri-fw"></i>
                  Vote wizzard
              </router-link>
          </div>
          <div class=" mt-8 ml-5">
              <router-link to="/voting-result" class="flex items-center text-medium text-body-2 ">
                  <i class="ri-bar-chart-line mr-2 ri-fw"></i>
                  Voting Result statistcs
              </router-link>
          </div>
          <div class=" mt-8 ml-5">
              <router-link to="/ballot-generator" class="flex items-center text-medium text-body-2 ">
                  <i class="ri-calculator-line mr-2 ri-fw"></i>
                  Ballot Generator slips
              </router-link>
          </div>
          <div class=" mt-8 ml-5">
              <router-link to="/physical-voting" class="flex items-center text-medium text-body-2 ">
                  <i class="ri-palette-line mr-2 ri-fw"></i>
                  Physical Voting
              </router-link>
          </div>
          <div class=" mt-8 ml-5">
              <router-link to="/vote-post" class="flex items-center text-medium text-body-2 ">
                  <i class="ri-code-s-slash-line mr-2 ri-fw"></i>
                  Vote post/categories
              </router-link>
          </div>
          <div class=" mt-8 ml-5">
              <router-link to="/vote-nominees" class="flex items-center text-medium text-body-2 ">
                  <i class="ri-group-line mr-2 ri-fw"></i>
                  Vote candidates/Nominees
              </router-link>
          </div>
          <div class=" mt-8 ml-5">
            <router-link to="settings" class="flex text-medium items-center text-body-2 g">
                <i class="ri-settings-3-line mr-2 ri-fw"></i>
                Settings
            </router-link>
          </div>
      </div>
  </aside>
</template>

<script>

export default {
  name: "SidePanel",
  data() {
    return {};
  },
  methods: {
   
  }
};
</script>

<style lang="scss" scoped>

</style>
