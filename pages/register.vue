<template>
  <v-container>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="10"
          md="8"
          lg="4"
          lx="4"
          class="mx-auto"
        >
          <LayoutLogo class="my-4" style="justify-self:center;display:flex;" />
          <AuthRegister />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  middleware: 'notAuthenticated'
}
</script>

<style>

</style>
