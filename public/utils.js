function rgbFloatToHex(r, g, b) {
    const red = Math.round(r * 255);
    const green = Math.round(g * 255);
    const blue = Math.round(b * 255);

    return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
  }

  const updateDimensions = (element, nodeProps) => {
    element.style.width = `${nodeProps.width}px`;
    element.style.height = `${nodeProps.height}px`;
  };

  const updatePosition = (element, nodeProps) => {
    element.style.left = `${nodeProps.x}px`;
    element.style.top = `${nodeProps.y}px`;
  };

  const updateRadius = (element, nodeProps) => {
    element.style.borderTopLeftRadius = `${nodeProps.borderTopLeftRadius}px`;
    element.style.borderTopRightRadius = `${nodeProps.borderTopRightRadius}px`;
    element.style.borderBottomLeftRadius = `${nodeProps.borderBottomLeftRadius}px`;
    element.style.borderBottomRightRadius = `${nodeProps.borderBottomRightRadius}px`;
  };

  const updateColor = (element, color) => {
    element.style.backgroundColor = rgbFloatToHex(color.r, color.g, color.b);
  };

  const createNode = (nodeProps) => {
    const node = document.createElement('div');

    updateDimensions(node, nodeProps);
    updatePosition(node, nodeProps);
    updateRadius(node, nodeProps);
    updateColor(node, nodeProps.color);

    node.className = 'shape';
    node.id = nodeProps.id;

    document.body.appendChild(node);
  }

  const deleteNode = (nodeId) => {
    const node = document.getElementById(nodeId);

    node.parentNode.removeChild(node);
  }

  const updateNode = (node) => {
    const shape = document.getElementById(node.id);
    const { color } = node;
    
    updateDimensions(shape, node);
    updatePosition(shape, node);
    updateRadius(shape, node);
    updateColor(shape, color);
  }