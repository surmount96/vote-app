<template>
  <div class="text-medium mx-6 mt-3 lg:mx-16 md:mx-8 mx-5 mb-4" style="height:65vh">
    <h1 class="text-medium">View all groups</h1>
    <div class="my-4">
      <table class="table">
        <tr>
          <td>Group Name</td>
          <td>Admin Status</td>
          <td>Action</td>
        </tr>
        <tr>
          <td>Obafemi Awolowo Uni SUG</td>
          <td>Approved</td>
          <td class="flex">
            <div class="">
              <i class="ri-edit-line text-blue ri-fw mr-2"></i>
            </div>
            <div class="ml-3">
              <i class="ri-delete-bin-line text-red ri-fw mr-2"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td>Science Faculty</td>
          <td>Pending</td>
          <td class="flex">
            <div class="">
              <i class="ri-edit-line text-blue ri-fw mr-2"></i>
            </div>
            <div class="ml-3">
              <i class="ri-delete-bin-line text-red ri-fw mr-2"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td>OAU Alumni</td>
          <td>Approved</td>
          <td class="flex">
            <div class="">
              <i class="ri-edit-line text-blue ri-fw mr-2"></i>
            </div>
            <div class="ml-3">
              <i class="ri-delete-bin-line text-red ri-fw mr-2"></i>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "VotingGroup"
};
</script>

<style scoped></style>
