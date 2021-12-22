<template>
  <div>
    <el-table
      :data="goodsList"
      stripe
      v-loading="listLoading"
      height="calc(100vh - 350px)"
      style="width: 100%">
      <el-table-column prop="goodId" min-width="100px" align="center" label="库存商品ID"></el-table-column>
      <el-table-column prop="goodName" min-width="120px" align="center" label="库存商品名称"></el-table-column>
      <el-table-column prop="categoryName" min-width="120px" align="center" label="对应库存分类"></el-table-column>
      <el-table-column prop="parValue" align="center" label="面值"></el-table-column>

      <el-table-column min-width="180px" align="center" label="导入系统时间">
        <template v-slot="scope">
          <span>{{ scope.row.createTime | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="cnStatus" align="center" label="当前状态">
        <template v-slot="scope">
          <span :class="scope.row.status === 0 ? 'green' : 'red'">{{scope.row.cnStatus}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="inventoryQuantity" min-width="100px" align="center" label="操作">
        <template v-slot="scope">
          <el-link :underline="false" type="primary" @click="handleDetail(scope.row.goodId)">查看</el-link>
          <el-link v-if="scope.row.mistake" :underline="false" type="danger">标记错误</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="mistakeReason" align="center" label="错误原因">
        <template v-slot="scope">
          <span>{{scope.row.mistakeReason || '-'}}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getList" />
  </div>
</template>

<script>
import { Pagination } from '';
</script>