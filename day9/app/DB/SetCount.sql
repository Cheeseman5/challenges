CREATE PROCEDURE `SetCount` (IN newCount INT)
BEGIN
	UPDATE store.store
    SET count = newCount
    WHERE id = 1;
END