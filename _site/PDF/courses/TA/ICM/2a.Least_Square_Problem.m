function [x, r] = least_square( A, b )
  x = A \ b;
  r = b - A*x;
end