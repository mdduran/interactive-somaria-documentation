<template>
  <b-container fluid id="app" class="column">
    <b-navbar type="light" variant="light" class="flex-none">
      <b-navbar-brand tag="h1" class="title"> Interactive Somaria Documentation </b-navbar-brand>
    </b-navbar>
    <b-row class="main-panel row flex-1">
      <b-col cols=3 class="left-panel">
        <Sidebar/>
      </b-col>
      <b-col class="right-panel">
        <b-card>
          <b-row>
            <b-col>
              <PropertyPanel/>
            </b-col>
            <b-col>
              <PreviewPanel/>
            </b-col>
          </b-row>
        </b-card>
        <DocumentationPanel/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import PreviewPanel from '@/components/PreviewPanel'
import PropertyPanel from '@/components/PropertyPanel'
import DocumentationPanel from '@/components/DocumentationPanel'

export default {
  name: 'app',
  components: {
    Sidebar,
    PreviewPanel,
    PropertyPanel,
    DocumentationPanel
  }
}
</script>

<style>
html, body, #app, .main-panel {
  height: 100%;
  overflow: hidden;
}
.title {
  font-weight: bold;
}
.row, .column {
  display: flex;
}
.column {
  flex-direction: column;
}
.flex-none {
  flex: none;
}
.flex-1 {
  flex: 1;
}
.left-panel, .right-panel {
  overflow-y: auto;
  max-height: 100%;
}
</style>
