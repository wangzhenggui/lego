import { useState } from 'react';
import { Upload, Modal } from 'antd';
// import ImgCrop from 'antd-img-crop';
// import ImgCrop from './ImgCrop';
import { PlusOutlined } from '@ant-design/icons';
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_FORM } from "../../common/constant";
import { formItemProperties, styleSchema } from '../../common/schema';

const COMPONENT_NAME = '图片上传'

const defaultBeforeUpload = () => { }
const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
/**
 * 1、accept 接受类型
 * 2、action 上传地址
 * 3、beforeUpload 上传之前处理
 * 4、crop 是否需要裁剪功能
 * 5、maxCount 最大上传数
 * 6、自己实现双向绑定
 */
const ApaasImageUpload = (props) => {
  const { value = [], onChange, crop, maxCount, beforeUpload, action } = props
  const [fileList, setFileList] = useState(value);
  const [previewImageDetail, setPreviewImageDetail] = useState({});
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (typeof onChange === 'function') {
      onChange([...newFileList])
    }
  };

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImageDetail({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    })
  };

  const handleCancel = () => {
    setPreviewImageDetail({
      ...previewImageDetail,
      previewVisible: false
    })
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const UploadChild = () => (
    <>
      <Upload
        action={action}
        listType="picture-card"
        fileList={fileList}
        onChange={handleChange}
        onPreview={handlePreview}
        beforeUpload={beforeUpload || defaultBeforeUpload}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
          visible={previewImageDetail.previewVisible}
          title={previewImageDetail.previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImageDetail.previewImage} />
      </Modal>
    </>)

  // if (crop) {
  //   return (
  //     <ImgCrop rotate>
  //       <UploadChild />
  //     </ImgCrop>
  //   )
  // }
  return (
    <UploadChild />
  )
}

ApaasImageUpload.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      accept: {
        title: "接受类型",
        type: "string",
        required: false,
        default: "",
        description: "请按照.png, .jpeg, .gif格式添写,中间,隔开"
      },
      action: {
        title: "上传地址",
        type: "string",
        required: false,
      },
      beforeUpload: {
        title: "上传之前处理",
        type: "string",
        required: false,
        description: "后面使用函数表达式组件替换"
      },
      // crop: {
      //   title: "开启裁剪功能",
      //   type: "boolean",
      //   required: false,
      //   widget: "switch"
      // },
      maxCount: {
        title: "最大上传个数",
        type: "number",
        min: 1,
        default: 1,
        widget: "slider"
      },
      ...formItemProperties({label: COMPONENT_NAME})
    },
  }, // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      ...styleSchema
    }
  }, // 样式属性Schema
  expandSchema: {
    type: "object",
    displayType: "column",
    properties: {
      didMount: {
        title: "组件加载后",
        type: "string",
        default: "",
      },
    }
  }, // 扩展属性Schema,用于写函数这些功能
  type: "ApaasImageUpload",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
};

export default ApaasImageUpload;
