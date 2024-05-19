interface Props {
  isLoading: boolean;

  skeleton: React.ReactElement;
  children: React.ReactElement;
}

export const WithSkeleton: React.FC<Props> = ({
  isLoading,
  skeleton,
  children,
}) => {
  return isLoading ? skeleton : children;
};
